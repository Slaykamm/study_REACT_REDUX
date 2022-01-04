import React from 'react';

const HourlyDeploy = (props) => {
    console.log(props)
    return (
        <div>
            <ul>
                <li>
                    <p>Часовой прогноз</p>
                </li>
                <li>
                    {props.city}
                </li>
                <li>
                    {props.country}
                </li>
                <li>
                   ТУТ {props.period}
                </li>

            </ul>

        </div>
    );
};

export default HourlyDeploy;