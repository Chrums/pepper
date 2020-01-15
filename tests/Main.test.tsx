import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import Main from '../src/components/Main';

it('Main is rendered', () => {
    // Render App in the document
    const mainElement: any = TestUtils.renderIntoDocument(
        <Main />
    );

    const mainNode = ReactDOM.findDOMNode(mainElement);

    // Verify text content
    expect(mainNode.textContent).toEqual('Hello World!');
});
