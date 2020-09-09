import Component from "react";

class ProjectsList extends Component {
    render() {
        return <div>{this.props.pendingProjects.toString()}</div>;
}
}