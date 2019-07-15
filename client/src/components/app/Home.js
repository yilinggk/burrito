import React from 'react';
import Tree from '../../assets/images/Tree';
import '../../stylesheets/app/home.scss';

const Home = () => {
    console.log(Tree);
    return (
        <div className="home">
            <Tree className="tree" pathClass="tree__path" />
            <h1>this is the home page woo</h1>
        </div>
    );
};

export default Home;
