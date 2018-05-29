import { Component } from 'react';
import Router from 'next/router'; 
import dynamic from 'next/dynamic';  
import Page from '../comps/Page';
import Markdown from '../comps/Markdown'; 
import { checkDir, checkName } from '../util/checkDirParts'; 
import updStateFromId from '../util/updStateFromId'; 
import getUrl from '../util/getUrl'; 
import getJwt from '../util/getJwt'; 

const CodeMirrorSkel = () => (
  <div className='column'>
    <textarea style={{ height: 'calc(300px - 1.2rem)', margin: 0 }} />
  </div>
); 
const CodeMirror = dynamic(import('../comps/CodeMirror'), {
  loading: CodeMirrorSkel, ssr: false
}); 
const initState = {
  name: '',
  dir: '',
  md: '## New Document!!',
  editMode: false,
  error: null,
  pending: false
}; 

export default class MngDoc extends Component {
  state = initState; 
  updVal = updStateFromId.bind(this); 
  updMd = md => this.setState({ md }); 
  submit = async () => {
    let { name, md, dir, editMode } = this.state; 
    let data = { 
      name: checkName(name),
      dir: checkDir(dir),
      md
    }; 
    const doErr = error => this.setState({ pending: false, error }); 
    const dirErr = 'can only contain A-Z, a-z, 0-9, -, or . and not start or end with .';
    
    if(!data.name) return doErr(
      'Document name ' + (data.name === 0 ? 'can not be empty' : dirErr)
    ); 
    if(!data.dir && data.dir !== 0) {
      return doErr('Directory ' + dirErr); 
    } else if(data.dir === 0) {
      data.dir = ''; 
    }
    if(data.md.trim().length === 0) {
      return doErr('Content can not be empty');
    }
    let url = getUrl('docs'),
      method = 'POST',
      headers = { Authorization: getJwt(), 
        'Content-Type': 'application/json' 
      };
    if(editMode) {
      let numRemoved = 0;  
      const dataKeys = Object.keys(data);
      dataKeys.forEach(k => {
        if(data[k] === this.props.doc[k]) {
          delete data[k];
          numRemoved++; 
        } 
      });
      if(dataKeys.length === numRemoved) return; 
      url = getUrl('docs/' + this.props.doc.id); 
      method = 'PATCH'; 
    }
    this.setState({ error: null, pending: true });
    const res = await fetch(url, {
      headers, method,
      body: JSON.stringify(data)
    }).catch(doErr); 
    try { 
      data = await res.json(); 
    } catch (err) { 
      data = { message: 'An error occurred submitting doc' };
    }
    if(res.ok) {
      const { id } = data;
      return Router.push({ 
        pathname: '/k', 
        query: { id } 
      }, getUrl(`k/${id}`));
    }
    doErr(data.message);  
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { doc } = nextProps; 
    if(doc) {
      const { name, dir, md } = doc; 
      return { name, md, dir, editMode: true }; 
    } else if(prevState.id) {
      return initState; 
    }
    return null; 
  }
  render() {
    const { md, dir, name, error, pending } = this.state; 
    const rowStyle = { paddingTop: 10 };
    return(
      <Page>
        <div className='row fill' style={rowStyle}>
          <div className='column column-50'>
            <Markdown className='fill Markdown' source={md} />
          </div>
          <div className='column column-50'>
            <div className='row'>
              <div className='column column-60'>
                <input type='text' maxLength={250} 
                  placeholder='New document name' id='name'
                  value={name} onChange={this.updVal}
                />  
              </div>
              <div className='column'>
                <input type='text' maxLength={1024}
                  placeholder='Subdirectory (optional)' id='dir'
                  value={dir} onChange={this.updVal} 
                />
              </div>
            </div>
            <div className='row'>
              <CodeMirror value={md} 
                className='column WrapCodeMirror'
                onChange={this.updMd}
                onSubmit={this.submit}
                options={{
                  theme: 'monokai',
                  mode: 'markdown',
                  lineWrapping: true
                }} 
              />
            </div>
            <div className='row' style={{ marginTop: 5 }}>
              <div className='column'>
                <span>{error}</span>
                <button className='float-right'
                  style={{ marginTop: 5 }}
                  onClick={pending ? null : this.submit}
                >Submit</button>
              </div>
            </div>
          </div>
        </div>
      </Page>  
    );
  }
}