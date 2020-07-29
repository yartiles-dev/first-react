import React from "react";

const withData = (WrappedComponent, dataSource) =>
    class WithData extends React.Component<any, any> {
        state: {
            data: any[]
        } = {
            data: []
        }

        componentDidMount() {
            fetch(dataSource)
                .then(response => response.json())
                .then(data => this.setState({data: data.slice(0, 3)}))
        }

        render() {
            return (
                this.state.data.length < 1 ? <h1>Loading</h1> :
                <WrappedComponent data={this.state.data} {...this.props}/>
            );
        }
    }

export default withData