import React from 'react';
import { useParams } from 'react-router-dom';


const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  return (
    <div>
      <h1>Mailbox {selectedBox._id}</h1>
      <h2>Details</h2>
      {selectedBox ? (
        <div>
          <p>Box Holder: {selectedBox.boxholder}</p>
          <p>Box Size: {selectedBox.boxSize}</p>
        </div>
      ) : (
        <p>Mailbox not found.</p>
      )}
    </div>
  );
};


export default MailboxDetails;
