import React, { useState } from 'react';
import '../styles/List.css';
import ItemCard from '../components/ItemCard';
import AddButton from '../components/AddButton';


const List: React.FC = () => {
    const [items, setItems] = useState<{ title: string }[]>([]);
    const [itemTitle, setItemTitle] = useState('');


    // Добавление предмета
    const handleAddItem = () => {
        if (itemTitle.trim() === '') return;

        const newItem = { title: itemTitle.trim() };
        setItems([...items, newItem]);
        setItemTitle('');
    };

    // Удаление предмета по индексу
    const handleDeleteItem = (indexToDelete: number) => {
        setItems(items.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="wrapper">

            <div className="list-container">

                <h1 className="list-title">СПИСОК ВЕЩЕЙ</h1>

                <AddButton onAdd={(title) => {
                    const newItem = { title };
                    setItems([...items, newItem]);
                }} />

                {items.map((item, index) => (
                    <ItemCard
                        key={index}
                        itemTitle={item.title}
                        onDeleteItem={() => handleDeleteItem(index)}
                    />

                ))}
            </div>

        </div>
    );

};

export default List;
