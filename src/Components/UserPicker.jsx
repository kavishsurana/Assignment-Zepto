import { useState } from 'react';
import './UserPicker.css'; // Import your CSS file for styling

const UserPicker = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [availableUsers, setAvailableUsers] = useState([
    'User1', 'Hello', 'World', 'Zepto', 'Front-end'
  ]);

  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleItemClick = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setAvailableUsers(availableUsers.filter(u => u !== user));
    setInputValue('');
  };

  const handleChipRemove = (removedUser) => {
    setSelectedUsers(selectedUsers.filter(user => user !== removedUser));
    setAvailableUsers([...availableUsers, removedUser]);
  };

  const filterUsers = availableUsers.filter(user =>
    user.toLowerCase().includes(inputValue.toLowerCase())
  );



  return (
    <div  className="user-picker-form">
      <div className="user-picker-container">
        <h1 className="user-picker-heading" style={{color: "blue"}}>Pick Users</h1>
        <div className="user-picker-input-container">
          <div className="user-picker-chips">
            {selectedUsers.map(user => (
              <div key={user} className="chip">
                {user}
                <span onClick={() => handleChipRemove(user)}>X</span>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Add new user..."
            className="user-picker-input"
          />
          {isInputFocused && (
            <ul className="user-picker-suggestions">
              {filterUsers.map(user => (
                <li key={user} onMouseDown={() => handleItemClick(user)}>
                  {user}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="horizontal-line"></div>
      </div>
    </div>
  );
};

export default UserPicker;
