import React from 'react';
import renderer from 'react-test-renderer';
import {ListItem} from "../src/components/ListItem";

it('renders correctly', () => {
    let item = {name: 'name', stargazers_count: 1};
    const listItem = renderer.create(
        <ListItem item={item} />
    ).toJSON();
    expect(listItem).toMatchSnapshot();
});