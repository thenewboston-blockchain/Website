// e.g. email: ["A user with that email address already exists."]
// e.g. password: ["This password is too short. It must contain at least 8 characters."]
interface ApplicationError {
  [error_type: string]: string[];
}

// e.g. <h1>Not Found</h1>
type ServerError = string;

interface Error {
  response: {
    data: ApplicationError | ServerError;
    status: number;
    statusText: string;
  };
}

export const formatAPIError = (error: Error): string => {
  let errorMessage = 'Error';

  if (typeof error.response?.data === 'object') {
    // eslint-disable-next-line no-console
    const errorArrays = Object.values(error.response.data);
    const errorArray = errorArrays.reduce((acc, val) => [...acc, ...val], []);
    errorMessage = errorArray.join(' ');
  }

  return errorMessage;
};
