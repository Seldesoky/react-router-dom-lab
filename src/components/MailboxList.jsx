import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h1>Mailbox List</h1>
      <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>
              <div>
                Mailbox {mailbox._id}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxList;
