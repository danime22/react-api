import React, { Component } from "react";
import SearchResults from "../SearchResults/SearchResults";
import SearchPane from "../SearchPane/SearchPane";
import Saved from "../Saved/Saved";

class ResultsPane extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }


    render() {
        if (this.props.renderSearchResults) {
            return (
                <div>
                    <SearchPane onClick={this.props.onClick} onDataChange={this.props.onDataChange} bookSearch={this.props.bookSearch} />
                    <SearchResults results={this.props.searchResults} />
                </div>
            )
        } else {
            return (
                <Saved results={this.props.savedResults} onDeleteClick={this.props.onDelete}/>
            )
        }
    }
}

export default ResultsPane;