// Roles
export const Role = {
  USER: 'user',
  MODERATOR: 'moderator',
  ADMIN: 'admin',
};

// Ticket priorities
export const Priority = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
  URGENT: 'Urgent',
};

// Ticket statuses
export const TicketStatus = {
  OPEN: 'Open',
  IN_PROGRESS: 'In Progress',
  RESOLVED: 'Resolved',
  CLOSED: 'Closed',
};


// // Role constants
// export const Role = Object.freeze({
//   USER: 'user',
//   MODERATOR: 'moderator',
//   ADMIN: 'admin',
// });

// // Priority constants
// export const Priority = Object.freeze({
//   LOW: 'Low',
//   MEDIUM: 'Medium',
//   HIGH: 'High',
//   URGENT: 'Urgent',
// });

// // Ticket status constants
// export const TicketStatus = Object.freeze({
//   OPEN: 'Open',
//   IN_PROGRESS: 'In Progress',
//   RESOLVED: 'Resolved',
//   CLOSED: 'Closed',
// });

// /**
//  * @typedef {Object} User
//  * @property {string} _id
//  * @property {string} name
//  * @property {string} email
//  * @property {string} role - one of Role.USER | Role.MODERATOR | Role.ADMIN
//  * @property {string[]=} skills
//  */

// /**
//  * @typedef {Object} Ticket
//  * @property {string} _id
//  * @property {string} title
//  * @property {string} description
//  * @property {User|string} user
//  * @property {(User|string)=} assignedTo
//  * @property {string} status - one of TicketStatus
//  * @property {string=} priority - one of Priority
//  * @property {string=} category
//  * @property {string=} aiNotes
//  * @property {string[]=} requiredSkills
//  * @property {string} createdAt
//  * @property {string} updatedAt
//  */
