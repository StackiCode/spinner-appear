import React, { Component } from 'react';
import Comp1 from '../Component/Comp1';
import Comp2 from '../Component/Comp2';
import Comp3 from '../Component/Comp3';

class Sec1 extends Component {
    render() {
        return (
            <div>
                <Comp1/>
                <Comp2/>
                <Comp3/>
            </div>
        )
    }
}

export default Sec1;