import React, { useState } from "react";

const UserTooltip = ({ users }) => {
  return (
    <ul className="tooltip">
      {users.map((user) => (
        <li key={user.id}>{user.firstNameAndLastName}</li>
      ))}
    </ul>
  );
};

const UsersWithTooltip = ({ primaryUsers, proxyUsers }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipToggle = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <ul className="user-container">
      <div className="user-list">
        <div>
          Primary Users:
          <button onClick={handleTooltipToggle}>Show Primary Users</button>
          {showTooltip && <UserTooltip users={primaryUsers} />}
        </div>
        <div>
          Proxy Users:
          <button onClick={handleTooltipToggle}>Show Proxy Users</button>
          {showTooltip && <UserTooltip users={proxyUsers} />}
        </div>
      </div>
    </ul>
  );
};

const UserPagination = ({ users }) => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleUsers = users.slice(startIndex, endIndex);

  return (
    <div>
      {visibleUsers.map((user) => (
        <div key={user.id}>{user.firstNameAndLastName}</div>
      ))}
      <div className="pagination">
        {Array.from({ length: Math.ceil(users.length / itemsPerPage) }).map(
          (_, index) => (
            <button key={index} onClick={() => handleClick(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

const Role = ({ role }) => {
  return (
    <div className="role">
      <div>Role Name: {role.roleName}</div>
      <UsersWithTooltip
        primaryUsers={role.primaryUsers}
        proxyUsers={role.proxyUsers}
      />
      <UserPagination users={[...role.primaryUsers, ...role.proxyUsers]} />
    </div>
  );
};

const RoleLevel = ({ roleLevel }) => {
  return (
    <div className="role-level">
      <div>Role Level Name: {roleLevel.roleLevelNme}</div>
      {roleLevel.roles.map((role) => (
        <Role key={role.roleId} role={role} />
      ))}
    </div>
  );
};

const TeamType = ({ teamType }) => {
  return (
    <div className="team-type">
      <div>Team Type Name: {teamType.teamTypeName}</div>
      {teamType.roleLevels.map((roleLevel) => (
        <RoleLevel key={roleLevel.roleLevelId} roleLevel={roleLevel} />
      ))}
    </div>
  );
};

const TeamTypesComponent = ({ data }) => {
  const { value } = data;

  console.log(value.map((item) => item.roleLevels.map((role) => role)));

  return (
    <div>
      {data.value.map((teamType) => (
        <TeamType key={teamType.teamTypeID} teamType={teamType} />
      ))}
    </div>
  );
};

export default TeamTypesComponent;
