# Destiny Collections

## This project was forked from Destiny Sets (https://github.com/joshhunt/destinySets)

## Getting started

Just want to update the set data? You can skip this party

Prerequisites:

* A fairly recent installation of Node - I use v8.9.3
* Able to use Terminal/bash

1.  Copy `.env.local-sample` to `.env.local` and fill in
	`REACT_APP_BUNGIE_CLIENT_ID` and `REACT_APP_API_KEY` with your Bungie.net
	OAuth client_id and API Key (see below for how to get these)

2.  Install dependencies with `npm install` (or `yarn install` if you have Yarn)

3.  Run the local dev server with `npm start` (or `yarn start` if you have
    Yarn)

4.  You should see "Compiled successfully!", with instructions, and the site
    should open in your browser.

    * Note, as we're using HTTPS locally with a self-signed certificate, you'll
      get a security warning. You'll need to 'proceed anyway' to continue.

### Getting API Keys from bungie.net

> TODO: write this better

1.  New app at https://www.bungie.net/en/Application
2.  oauth client type: public
3.  redirect url: url the site is running at. for dev, this will probably be
	https://localhost:4000
4.  check all scopes, except for "Administrate groups and clans..."
5.  Origin Header: if it's just a key for local development, just enter `*` here
