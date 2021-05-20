import React from 'react';
import { screen, render } from '@testing-library/react';
import Details from './Details';

describe('Avatar Details Container', () => {
    it('Renders a single Avatar character to the screen', async () => {
        render(<Details
            match={{
                params: { id: '5cf5679a915ecad153ab68e9' }
            }} />)

        screen.getByText('Loading...');

        const name = await screen.findByText('Bolin');

        expect(name).toMatchSnapshot();
    });
});