import React from 'react';
import '../styles/ItemCard.css';

interface ItemCardProps {
  itemTitle: string;
  onDeleteItem: () => void;
}

const ItemCard = ({ itemTitle, onDeleteItem }: ItemCardProps): React.ReactElement => {

  return (
    <section className="card-container">

      <h3 className="item-title">{itemTitle}</h3>
      
      <div className="delete-icon" onClick={onDeleteItem}>
  🗑️
</div>

    </section>
  );
};

export default ItemCard;
