import React, { Component } from 'react';
import { StartPageWrapper } from './my_styled_components';
import styled from 'styled-components';
import Queries from '../rest/Queries';

import { MySQLWrapper, TextArea, ListBlock, SqlUl, SubmitButton, RadioButtons } from './my_styled_components'

class MySQLSection extends Component {

    state = {
        radioToggleSafe: false,
        radioToggleNotsafe: true,
        queryResults: [],
        queryString: ""
    }


    handleQuery = async () => {
        const { queryString } = this.state;
        //Stuf happening
        // await Queries.runQuery(queryString);
    }

    handleTextArea = (e) => {
        this.setState({
            queryString: e.target.value
        })
    }

    handleRadioClick = (e) => {
        const target = e.target;
        if (target.value === "notSafe") {
            this.setState({ radioToggleNotsafe: true, radioToggleSafe: false })
        } else {
            this.setState({ radioToggleNotsafe: false, radioToggleSafe: true })
        }
    }

    render() {
        const { radioToggleSafe, radioToggleNotsafe, queryResults, queryString } = this.state;
        return (
            <StartPageWrapper>
                <h1 style={{ textAlign: "center" }}>MySQL</h1>
                <MySQLWrapper>
                    <TextArea rows="10" value={queryString} onChange={this.handleTextArea}>
                    </TextArea>
                    <ListBlock>
                        <SqlUl>
                            {queryResults.map(res => res.userName)}
                        </SqlUl>
                    </ListBlock>
                    <SubmitButton onClick={this.handleQuery} type="submit" value="Run" />
                    <RadioButtons>
                        <input onChange={this.handleRadioClick} type="radio" value="notSafe" checked={radioToggleNotsafe} /><label>Not safe</label>
                        <input onChange={this.handleRadioClick} type="radio" value="safe" checked={radioToggleSafe} /><label>Safe</label>
                    </RadioButtons>
                </MySQLWrapper>
            </StartPageWrapper>
        );
    }
}

export default MySQLSection;