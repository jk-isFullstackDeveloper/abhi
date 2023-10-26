import React from "react";

const Team = ({ teamData }) => {
  const ProjectTeam = (key) => {
    const teamTypeName = teamData.value.teamTypes.map(
      (teamType) => teamType[key]
    );

    return teamTypeName;
  };

  console.log("jitendra", ProjectTeam("teamTypeName"));
  console.log("jitendraroleLevels", ProjectTeam("roleLevels"));

  const projectTeam = teamData.value.teamTypes.find(
    (teamType) => teamType.teamTypeName === "Project Team"
  );

  if (!projectTeam) {
    return <div>Project Team data not found.</div>;
  }

  return (
    <div>
      <h2>{projectTeam.teamTypeName}</h2>
      {projectTeam.roleLevels.map((roleLevel) => (
        <div key={roleLevel.roleLevelId}>
          <h3>{roleLevel.roleLevelNme}</h3>
          {roleLevel.roles.map((role) => (
            <div key={role.roleId}>
              <span>{role.roleName}</span>
              <span
                data-tip={JSON.stringify(role)}
                data-for={`tooltip-${role.roleId}`}
                style={{ cursor: "pointer" }}
              >
                [?]
              </span>
              <div id={`tooltip-${role.roleId}`} effect="solid" place="right">
                <div>
                  <strong>{role.roleName}</strong>
                  <p>Primary Users:</p>
                  <ul>
                    {role.primaryUsers.map((user) => (
                      <li key={user.id}>{user.firstNameAndLastName}</li>
                    ))}
                  </ul>
                  <p>Proxy Users:</p>
                  <ul>
                    {role.proxyUsers.map((user) => (
                      <li key={user.upiNumber}>{user.firstNameAndLastName}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Team;
