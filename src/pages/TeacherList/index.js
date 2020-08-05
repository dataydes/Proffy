import React from 'react';
import './styles.css';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="subject">Dia da semana</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="subject">Hora</label>
                        <input type="text" id="subject" />
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
            </main>
        </div>
    )
}
export default TeacherList;