import { Component } from 'react'
import PropTypes from 'prop-types';
import {SearchbarEl, SearchForm, SearchFormButton, ButtonLabel, SearchFormInput} from './Searchbar.styled'

export class Searchbar extends Component {

    state = {
    inputValue: '',
    };
    
    handleSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;

    this.props.onSubmit(inputValue);
    this.setState({ inputValue: '' });
  };

    inputChange = e => {
    this.setState({ inputValue: e.target.value.trim().toLowerCase() });
  };
    
    render() {
        const { inputValue } = this.state;

        return (
        <SearchbarEl>
             <SearchForm onSubmit={this.handleSubmit}>
                <SearchFormButton type="submit">
                <ButtonLabel ></ButtonLabel>
                </SearchFormButton>

                <SearchFormInput
                type="text"
                autoComplete="off"
                autoFocus
                value={inputValue}
                placeholder="Search images and photos"
                onChange={this.inputChange}
                />
            </SearchForm>
        </SearchbarEl>
    )
    }
    
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
