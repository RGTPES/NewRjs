

    import React, { Component } from 'react';
const user = {
    firstName: "John",
    lastName: "Doe"
}
function formatName(user: { firstName: string; lastName: string }) {
    return `${user.firstName} ${user.lastName}`;
}
    class FormatName extends Component {
        render() {
            return (
                <div>
                  {formatName(user)}
                </div>
            );
        }
    }

    export default FormatName;
