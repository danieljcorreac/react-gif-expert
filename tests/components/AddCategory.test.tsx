import AddCategory from '../../src/components/AddCategory';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Tests in AddCategory', () => {

    const inputValue = 'One Punch';

    test('debe de cambiar el valor de la caja de texto', () => {
        
        render(<AddCategory onNewCategory={ () => {} }/>)
        const input = screen.getByRole<HTMLInputElement>('textbox');

        fireEvent.input(input, { target: { value: inputValue } });

        expect(input.value).toBe(inputValue);

    });

    test('debe de llamar al onNewCategory si el input tiene un valor', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole<HTMLInputElement>('textbox');
        const form = screen.getByRole<HTMLFormElement>('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('no debe de llamar al onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>)
        const form = screen.getByRole<HTMLFormElement>('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();

    });

});