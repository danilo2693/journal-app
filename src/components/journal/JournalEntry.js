import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage:
                        'url(https://thumbs.dreamstime.com/b/ejemplos-del-d%C3%ADa-con-los-personajes-de-dibujos-animados-sonrientes-divertidos-sol-131735089.jpg)',
                }}
            ></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo día</p>
                <p className="journal__entry-content">
                    Nostrud exercitation minim dolor laborum qui Lorem id aute.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h3>28</h3>
            </div>
        </div>
    );
};
