import {Component} from 'react'

import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../emloyers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form'

import './app.css'


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: JSON.parse(localStorage.getItem('todo')) || [
                {name: 'Andrew', salary: 800, increase: false, clickToLike:true, id: 1},
                {name: 'Maks', salary: 7700, increase: true, clickToLike:false, id: 2},
                {name: 'Nick', salary: 840, increase: false, clickToLike:false, id: 3},
            ],
            term: '',
            filter: 'all',
        }
        this.maxId = this.state.data.length + 1;
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex((elem) => elem.id === id);
            // const f1 = data.slice(0 , index);
            // const f2 = data.slice(index + 1);
            // const newArray = [...f1, ...f2]

            return {
                data: data.filter(item => item.id !== id)
            }
            
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            clickToLike:false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArray = [...data,  newItem];
            return({
                data: newArray
            })
        })
    }
     
    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
            
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArray = [...data.slice(0,index), newItem, ...data.slice(index+1)];

        //     return {
        //         data: newArray 
        //     }
        // })

         this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
         }))
    }
    
    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id){
    //                 return {...item, clickToLike: !item.clickToLike}
    //             }
    //             return item;
    //         })
    //      }))
    // }

    searchEmp = (items, term) => {
        if(term.length === 0){
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term});
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'clickToLike':
                return items.filter(item => item.clickToLike);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    } 

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    componentDidUpdate(){
        localStorage.setItem('todo', JSON.stringify(this.state.data))
    }

    render (){
         const {data, term, filter} = this.state;
         const employees = this.state.data.length;
         const increased = this.state.data.filter(item => item.increase).length;
         const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className='app'>
                <AppInfo increased={increased} employees={employees} />
    
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList
                 data={visibleData} 
                 onDelete={this.deleteItem}
                 onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App; 