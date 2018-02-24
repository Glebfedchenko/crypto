import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllData } from '../actions/index';
import { bindActionCreators } from 'redux';
import Wrapper from './Wrapper';
import Coin from './Coin';
import Spinner from './Spinner';

class Coins extends Component {
    componentWillMount() {
        this.props.getAllData();
    }
    getCoins = () => {
        const coinArray = [];
        const size = 29;
        for (let item in this.props.coins.data) {
            coinArray.push(this.props.coins.data[item]);
        }
        return coinArray.slice(9, size).map((coin, i) =>
            <Coin key={coin.Id}
                name={coin.Name}
                i={i}
                url={coin.Url}
                image={coin.ImageUrl} />
        )
    }
    render() {
        const isFetching = this.props.coins.isFetching
        return (
            <div className='container text-center'>
                <Wrapper/>
                {isFetching ? this.getCoins() : <Spinner />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    coins: state.coins
})
const mapDispatchToProps = dispatch => ({
    getAllData: bindActionCreators(getAllData, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Coins)