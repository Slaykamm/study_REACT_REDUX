import React from 'react';
import  cl from './MySelect.module.css'

const MySelect = ({sortedCountry, defaultValue, value, onChange }) => {
    return (

        <select 
        
        className={cl.sel}

        value={value}
        onChange={event => onChange(event.target.value)}
        
        > 

            <option disabled value="">{defaultValue}</option>

            {sortedCountry.map(country => 

                    <option value={country.code} key={country.id} >
                        {country.name}
                    </option> 

                   
            )}


        </select>
    );
};

export default MySelect;