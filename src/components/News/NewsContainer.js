import React from 'react';
import s from './NewsContainer.module.css';
import NavNews from './NavNews/NavNews';

import { Route, Switch, withRouter } from 'react-router-dom';
import News from './News/News';
import Statistic from './Statistic/Statistic';
import Setting from './Setting/Setting';


const NewsContainer = (props) => {

    console.log('render1')
    return (
        <div className={s.newsContainerItems}>

            <div className={s.newsContainerNav}><NavNews /></div>

            <div className={s.newsContainerContent}>
                <Switch>
                    <Route path='/main' render={() => <News />} />
                    <Route path='/statistic' render={() => <Statistic />} />
                    <Route path='/setting' render={() => <Setting />} />
                    <Route path='*'
                        render={() => <div>404 not found</div>} />
                </Switch>
            </div>

        </div>
    )
}

export default withRouter(NewsContainer)

