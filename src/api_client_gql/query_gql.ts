import {gql} from '@apollo/client';

export const USERS_QUERY = gql`
  query users {
    users {
      email
      id
      mobile
      user_id
      user_name
    }
  }
`;

export const CHATS_QUERY = gql`
  query chats {
    chats {
      chat_id
      id
      members
      messages
      title
    }
  }
`;

export const MESSAGES_QUERY = gql`
  query messages {
    messages {
      body
      from_id
      id
      msg_id
      msg_type
      to_id
    }
  }
`;
