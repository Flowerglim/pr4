import Card from './Card';

function Catalog() {
    return (
        <div className='catalog'>
            <Card title="Карточка 1" description="Описание 1" />
            <Card title="Карточка 2" description="Описание 2" />
            <Card title="Карточка 3" description="Описание 3" />
        </div>    
    );
}

export default Catalog;