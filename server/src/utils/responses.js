// Status responses
const STATUS_MESSAGES = {
  200: 'success',
  201: 'success',
  400: 'fail',
  401: 'fail',
  403: 'fail',
  404: 'fail',
  500: 'error',
};

export const EVENT_MESSAGES = {
  badRequest: `Bad Request`,
  notFound: `Not Found`,
  notFoundOpponent: `Not Found battle opponent`,
  missingUserIdentifier: `Missing User identifier`,
  missingFields: `Missing fields in request`,
  alreadyClaimed: `Already Claimed`,
  // Events
  eventTag: `Event database`,
  eventNotFound: `Failed to find event`,
  createEventFail: `Failed to create event`,
  eventNotDeleted: `Failed to delete event`,
  // Players
  playerTag: `Player database`,
  playerNotFound: `Failed to find player`,
  createPlayerFail: `Failed to create player`,
  playerNotDeleted: `Failed to delete player`,
  updatePlayerFail: `Failed to update player`,
  // Tiles
  tilesTag: `Tile database`,
  tilesNotFound: `Failed to find tiles`,
  tilesDbEmpty: `No tiles for user found`,
  // Buildings
  buildingsTag: `Building database`,
  buildingsNotFound: `Failed to find buildings`,
  buildingsDbEmpty: `No buildings for user found`,
  // Troops
  troopsTag: `Troop database`,
  troopsNotFound: `Failed to find troops`,
  troopsDbEmpty: `No troops for user found`,
  // Achievements
  achievementsTag: `Achievement database`,
  achievementsNotFound: `Failed to find achievements`,
  achievementsDbEmpty: `No achievements for user found`,
  // Users
  userTag: `User database`,
  userNotFound: `Failed to find user/s`,
  emailInUse: `Email already in use`,
  usernameInUse: `Username already in use`,
  emailNotFound: `Email not found in database`,
  createUserFail: `Failed to create new user`,
  passwordMatchError: `Password match error for reset Password - New passwords do not match`,
  passwordResetError: `Account record doesn't exist or has been reset already.`,
  // Verification
  verificationTag: `Verification database`,
  verificationNotFound: `Failed to find verification`,
  verificationNotFoundReturnMessage: `Account record doesn't exist or has been verified already. Please sign up or log in.`,
  expiredLinkMessage: `Links has expired, please sign up or log in and check your account`,
  invalidVerificationMessage: `Invalid verification details passed. Check your inbox, or contact support`,
};

// Error responses for eventEmitter/errors
export const RESPONSE_MESSAGES = {
  ConfictEvent: 'Request conflicts with data on server',
  DeactivatedUserEvent: 'The target user account has been deactivated',
  ServerErrorEvent: 'Internal Server Error',
  CreateEventError: 'Failed to create an event log',
  NotFoundEvent: 'was not found',
  NoPermissionEvent: 'You are not authorized to perform this action',
  NoValidationEvent: 'Unable to verify user',
  BadRequestEvent: 'Incorrect request syntax or malformed request',
  MissingFieldEvent: 'Missing fields in body',
};

// Data responses
export function sendDataResponse(res, statusCode, payload) {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    data: payload,
  });
}

// Error responses
export function sendMessageResponse(res, statusCode, message) {
  return res.status(statusCode).json({
    status: STATUS_MESSAGES[statusCode],
    message,
  });
}
