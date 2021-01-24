import React from 'react'
import styles from './Filter.module.css'
import filtersData from '../../data/filter.json'
const queryString = require('query-string');
class Filter extends React.Component{
    handleFilterClick = (filterType, filterKey) => {
        let parsed = queryString.parse(this.props.history.location.search);
        if(parsed[filterType]){
            if(parsed[filterType]===filterKey){
                delete parsed[filterType]
            }
            else
            parsed[filterType]=filterKey
        }
        else{
parsed[filterType]=filterKey
        }
let str = ""
        for (const property in parsed) {
            str = str + `${property}=${parsed[property]}&`
          }
          var pos = str.lastIndexOf('&');
          str = str.substring(0,pos) + '' + str.substring(pos+1)
          this.props.handleFilterChange(str) 
      };
      getSelectedBackgroundColor = (filterType, filterKey) =>{
        let parsed = queryString.parse(this.props.history.location.search);
        for (const property in parsed) {
            if( property===filterType && parsed[property]===filterKey){
                    return{
                        backgroundColor:'chartreuse'
                    }
            }   
          }
      }
    render(){
        return(
        <>
        <div className={styles.filter_container}>
    <h4 >Filters</h4>
    {filtersData.data.map(filter => {
        const filterType=filter.type
        return (
            <div>
                 <div className={styles.filter_type_title}>{filter.title}</div>
    <div className={styles.border_bottom}></div>
    <div className={styles.launch_year_filter_section}>     
          {filter.filters.map(filter => {
              return (
              <button style={this.getSelectedBackgroundColor(filterType, filter.key)} onClick={()=>{this.handleFilterClick(filterType, filter.key)}}>{filter.value}</button> 
              )
          })  }
            </div>
            </div>
        )
    })}           
</div>
        </>
        )
    }
}

export default Filter