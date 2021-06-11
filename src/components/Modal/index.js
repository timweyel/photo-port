import React from 'react';

function Modal({currentPhoto}) {

  const {name, category, description, index} = currentPhoto;

  // const modalUrl = '../../../public/img/large/';
  console.log(currentPhoto);
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        {/* <img src = {(modalUrl + `${category}/${index}.jpg`)} alt="current category" /> */}
        <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
        <p>{description}</p>
        <button type="button">
          Close this modal
        </button>
      </div>
    </div>
  );
}

export default Modal;


//../../../public/img/large/${category}/${index}.jpg
//../../assets/large/${category}/${index}.jpg