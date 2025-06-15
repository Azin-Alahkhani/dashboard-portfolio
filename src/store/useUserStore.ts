import { link } from "fs";
import { create } from "zustand";

type LinkedAccount = {
  linked: boolean;
  username?: string;
};

type UserStore = {
  name: string;
  email: string;
  avatar: string;
  linkedAccounts: Record<string, LinkedAccount>;

  // State updaters
  setUser: (
    data: Partial<Pick<UserStore, "name" | "email" | "avatar">>
  ) => void;
  linkAccount: (platform: string, username: string) => void;
  unlinkAccount: (platform: string) => void;

  // Derived selector
  getLinkedAccounts: () => Record<string, LinkedAccount>;
};

export const useUserStore = create<UserStore>((set, get) => ({
  name: "Jane Doe",
  email: "jane@example.com",
  avatar: "",
  linkedAccounts: {
    Instagram: { linked: true, username: "jane_insta" },
    linkedIn: { linked: true, username: "janedoe_linkedin" },
    Facebook: { linked: false },
    YouTube: { linked: true, username: "janeyoutube" },
    Pinterest: { linked: false },
    Snapchat: { linked: true, username: "janesnap" },
    Tumblr: { linked: false },
    Twitter: { linked: false },
    TikTok: { linked: true, username: "janetok" },
  },

  setUser: (data) => set((state) => ({ ...state, ...data })),

  linkAccount: (platform, username) =>
    set((state) => ({
      linkedAccounts: {
        ...state.linkedAccounts,
        [platform]: { linked: true, username },
      },
    })),

  unlinkAccount: (platform) =>
    set((state) => ({
      linkedAccounts: {
        ...state.linkedAccounts,
        [platform]: { linked: false },
      },
    })),

  getLinkedAccounts: () => {
    const accounts = get().linkedAccounts;
    return Object.entries(accounts).reduce((acc, [platform, data]) => {
      if (data.linked) {
        acc[platform] = data;
      }
      return acc;
    }, {} as Record<string, LinkedAccount>);
  },
}));
