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
        queryString: "",
        loader: false,
        guiMessage: ""
    }


    handleQuery = () => {
        const { queryString } = this.state;
        this.setState({
            loader: true
        }, async () => {
            if (queryString.includes("users")) {
                const responsePackage = await Queries.runQuery(queryString, "users");
                this.setState({
                    queryResults: responsePackage,
                    loader: false
                })
            } else {
                const responsePackage = await Queries.runQuery(queryString, "noTable");
                this.setState({
                    guiMessage: responsePackage.message
                })
            }
        })
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
        const { radioToggleSafe, radioToggleNotsafe, queryResults, queryString, guiMessage } = this.state;
        return (
            <StartPageWrapper>
                <h1 style={{ textAlign: "center" }}>MySQL</h1>
                <h1 style={{ textAlign: "center", color: "red" }}>{guiMessage}</h1>
                <MySQLWrapper>
                    <TextArea rows="10" value={queryString} onChange={this.handleTextArea}>
                    </TextArea>
                    <ListBlock>
                        <SqlUl>
                            {(queryResults.length ?
                                (<React.Fragment>
                                    <li style={{fontSize: "28px"}}>Results:</li>
                                    {queryResults.map(res => <li>{res.userName}</li>)}
                                </React.Fragment>)
                                :
                                null
                            )}

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