import React from 'react';

const ListCourse = () => {
    const data: string[] = [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS"
    ];
    return (
        <div>
            {data && data.map((item:string,index:number) => {
                return <li key={index}>{item}</li>

            })}

        </div>
    );
}
