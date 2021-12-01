import React from 'react';
//import s from './Setting.module.css';
import { Switch, Route} from 'react-router-dom';
import AddCategory from './AddCategory/AddCategory';
import SettingNav from './SettingNav/SettingNav';
import DeleteCategory from './DeleteCategory/DeleteCategory';
import RenameCategory from './RenameCategory/RenameCategory';
import { connect } from 'react-redux';
import { addCategory } from './../../../Redux/diagrammReducer';

const Setting =(props)=> {
    return (<>

<Switch>
<Route exact path='/setting' render={() => <SettingNav />} />
<Route path='/setting/AddCategory' render={() => <AddCategory addCategory={props.addCategory} />} />
<Route path='/setting/DeleteCategory' render={() => <DeleteCategory />} />
<Route path='/setting/RenameCategory' render={() => <RenameCategory />} />
       </Switch>
       </>
    )

}
let mapStateToProps = (state) => {
    return {
        diagramm: state.expenses
    }
}

export default connect (mapStateToProps, {addCategory}) (Setting)