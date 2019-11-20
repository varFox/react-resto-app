import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoServece from '../hoc';
import {menuLoaded, menuRequested, menuError} from '../../actions';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';

import './menu-list.scss';

class MenuList extends Component {

	componentDidMount() {
		this.props.menuRequested();
		const {RestoService} = this.props;
		RestoService.getMenuItems()
		.then(res => this.props.menuLoaded(res))
		.catch(err => this.props.menuError(err));
	}

	render() {
		const {menuItems, loading, error} = this.props;

		if(loading) {
			return <Spinner/>
		}
		if(error) {
			return <ErrorBoundry/>
		}
		return (
			<ul className="menu__list">
				{
					menuItems.map(menuItem => {
						return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
					})
				}
			</ul>
		)
	}
};

const mapStateToProps = (state) => {
    return {
				menuItems: state.menu,
				loading: state.loading,
				error: state.error
    }
}

const mapDispatchToProps = {
	menuLoaded,
	menuRequested,
	menuError
}

export default WithRestoServece()(connect(mapStateToProps, mapDispatchToProps)(MenuList));