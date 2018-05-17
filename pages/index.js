import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Router from 'next/router'; 
import Paginate from 'react-paginate'; 
import Page from '../comps/Page'; 
import PaddedRow from '../comps/PaddedRow';  
import Spinner from '../comps/Spinner';
import DocItem from '../comps/DocItem'; 
import { $limit, getDocs, buildQ } from '../util/getDocs'; 
import getJwt from '../util/getJwt'; 
import mapUser from '../util/mapUser'; 

class Index extends Component {
  state = {
    $sort: 'updated:-1',
    $search: '',
    page: 1,
    pending: false,
    error: null,
    total: 0,
    docs: []
  }
  static async getInitialProps({ req, query }) {
    let page = 1, $search = ''; 
    if(query) {
      page = query.page || page;
      $search = query.search || $search;  
    }
    const jwt = getJwt(req); 
    if(!jwt) return { total: 0, docs: [] }; 
    const q = buildQ({ $search, $skip: page }); 
    const data = await getDocs(q, req ? jwt : false); 
    return { ...data, page, $search }; 
  }
  updDocs = (time, doSearch) => {
    clearTimeout(this.docsTime); 
    this.docsTime = setTimeout(async () => {
      let { $sort, $search, page } = this.state; 
      if(doSearch) {
        const query = { search: $search }; 
        if(!$search) delete query.search; 
        Router.push({ pathname: '/', query });
      }
      this.setState({ error: null }); 
      this.docsTime = setTimeout(() => {
        this.setState({ pending: true }); 
      }, 125);
    
      const q = buildQ({ $search, $sort, $skip: page });
      const data = await getDocs(q); 
      clearTimeout(this.docsTime);  
      this.setState({ ...data, pending: false });
    }, time || 275);
  }
  updQuery = e => {
    this.setState({ [e.target.id]: e.target.value }); 
    this.updDocs(0, e.target.id === '$search'); 
  }
  handlePage = ({ selected }) => {
    const { $search } = this.state; 
    const page = selected + 1;
    const query = {};
    this.setState({ page }); 
    if(page > 1) query.page = page; 
    if($search) query.search = $search; 
    Router.push({ pathname: '/', query }); 
    this.updDocs(1); 
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let { docs, total, page, $search } = nextProps; 
    if(docs.length !== prevState.docs.length || 
       page !== prevState.page || $search !== prevState.$search) {
      return { total, docs, page, $search, pending: false }; 
    }
    return null; 
  }
  componentDidUpdate(prevProps) {
    const { user, docs } = this.props;
    if(prevProps.user.email === user.email) return; 
    if(user.email && docs.length === 0) this.updDocs(1); 
  }
  render() {
    const { 
      $sort, $search, pending, 
      error, docs, total, page 
    } = this.state; 
    const pages = Math.ceil(total / $limit); 
    return (
      <Page>
        <PaddedRow>
          <input type='text' placeholder='Search knowledge base...' 
            maxLength={128} value={$search} className='search'
            id='$search' onChange={this.updQuery}
          />
        </PaddedRow>
        <PaddedRow>
          <div className='inline' style={{ width: '100%' }}>
            <h4 className='noMargin'>Docs</h4>
            <div className='float-right inline'>
              <label htmlFor='sort'>Sort: </label>
              <select id='$sort' value={$sort} 
                onChange={this.updQuery} style={{ width: 150 }}
              >
                <option value='updated:-1'>{'Updated (new -> old)'}</option>
                <option value='updated:1'>{'Updated (old -> new)'}</option>
                <option value='created:-1'>{'Created (new -> old)'}</option>
                <option value='created:1'>{'Created (old -> new)'}</option>
                <option value='dirName:1'>{'Name (A -> Z)'}</option>
                <option value='dirName:-1'>{'Name (Z -> A)'}</option>
              </select>
            </div>
          </div>
        </PaddedRow>
        <PaddedRow>
          {docs.length > 0 || error || pending ? null : <p>No docs found...</p>}
          {!error ? null : <p>{error}</p>}
          {!pending || error ? null : <Spinner style={{ margin: '25px auto 0' }} />}
          {docs.length < 1 || pending || error ? null
            : <div>
              <table>
                <thead>
                  <tr><th>
                    Doc <span className='float-right'>Modified</span>
                  </th></tr>
                </thead>
                <tbody>
                  {docs.map(doc => <DocItem {...doc} key={doc.id} />)}
                </tbody>
              </table> 
              {pages < 2 ? null
                : <Paginate pageCount={pages} 
                  containerClassName='paginate' 
                  activeClassName='active'
                  onPageChange={this.handlePage}
                  forcePage={page - 1}
                />
              }
            </div>
          }
        </PaddedRow> 
      </Page>
    );
  }
}
export default connect(mapUser)(Index); 