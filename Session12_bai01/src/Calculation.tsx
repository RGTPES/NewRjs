

    import React, { Component } from 'react';

    class Calculation extends Component {
        render() {
            return (
                <div>
                    <h1>Danh sach ket qua</h1>
                    <ol>
                        <li>10+10 = {10 + 10}</li>
                        <li>10-10 = {10 - 10}</li>
                        <li>10*10 = {10*10}</li>
                        <li>10/10 = {10/10}</li>
                    </ol>
                </div>
            );
        }
    }

    export default Calculation;
