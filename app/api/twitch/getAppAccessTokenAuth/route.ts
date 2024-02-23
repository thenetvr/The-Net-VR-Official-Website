import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    contact:
      "this is data from 'authy auth' route. Make a POST Request to send your message",
  });
}

export async function POST(req: any) {
  try {
    // retrieve email from user request body
    const TwitchTokenResponse = await req.json();
    console.log('\nINSIDE POST REQUEST FOR APP ACCESS');
    console.log(TwitchTokenResponse);
  } catch (error) {

    console.error(error);
    
  }
}

type TwitchTokenResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

const CLIENT_ID = process.env.TWITCH_CLIENT_ID || '';
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET || '';

export default async function authHandler() {
  try {
    console.log(CLIENT_SECRET);
    console.log(CLIENT_ID);
    const response = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // Use URLSearchParams to encode the body with x-www-form-urlencoded format
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'client_credentials',
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch token: ${response.statusText}`);
    }

    const data: TwitchTokenResponse = await response.json();
    
    return data["access_token"];

  } catch (error) {

    console.error(error);
    return;
    //res.status(500).json({ message: 'Failed to obtain Twitch app access token' });
  }
}
