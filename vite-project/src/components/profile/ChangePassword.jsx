import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InputProfile } from "../inputs/InputProfile";

/**
 * Renders a form for changing the user's password.
 *
 * @param {Object} props - The props object containing the following property:
 *   - close: A function to be called when the form is closed.
 * @return {JSX.Element} The rendered form component.
 */
export function ChangePassword({ close }) {
  return (
      <div className="grid justify-center md:m-4">
        <form>
          <div className="grid gap-6 mb-6">
            <h2 className="font-bold text-blue-700 text-3xl text-center mb-4">
              Change Password
            </h2>
            <InputProfile
              placeholder="Old Password"
              type="password"
              id="old-password"
              label="Old Password"
            />
            <InputProfile
              placeholder="New Password"
              type="password"
              id="new-password"
              label="New Password"
            />
            <InputProfile
              placeholder="Write it again"
              type="password"
              id="check-password"
              label="Write the password again"
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2 grid-cols-1 w-full pb-2 pt-2">
            <button
              type="submit"
              className="text-blue-700 border-2 border-blue-700 p-2 rounded-lg"
              onClick={close}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-white bg-orange-700 p-2 rounded-lg"
            >
              Change
            </button>
          </div>
        </form>
      </div>
  );
}
