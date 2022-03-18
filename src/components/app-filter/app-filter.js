import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'clickToLike', label: 'На повышение'},
        {name: 'moreThen1000', label: 'ЗП большо 1000'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'; 
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                onClick={() => props.onFilterSelect(name)}
                key={name}>
                {label}
            </button>
        )
    })



    return (
        <div className="btn-group">
            {buttons}
            
        </div>
    )
}

export default AppFilter;