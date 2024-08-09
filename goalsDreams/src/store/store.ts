import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  PersistOptions,
  devtools,
} from "zustand/middleware";
import { nanoid } from "nanoid";

interface User {
  name?: string;
  age?: number;
  [key: string]: any;
}

interface ProfileState {
  user: User;
  addInfo: (info: Partial<User>) => void;
}

// Типизация для persist
type MyPersist = (
  config: (set: any, get: any, api: any) => ProfileState,
  options: PersistOptions<ProfileState>
) => (set: any, get: any, api: any) => ProfileState;

export const useProfile = create<ProfileState>(
  (persist as MyPersist)(
    (set) => ({
      user: {}, // Изначально пустой объект
      addInfo: (info) =>
        set((state: ProfileState) => ({
          user: { ...state.user, ...info },
        })),
    }),
    {
      name: "user-info",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export interface SectionItem {
  id: string;
  text: string;
  is_liked: boolean;
  color: string;
  image: string | null;
  title: string;
}

export interface Section {
  id: string;
  name: string;
  sectionItems: SectionItem[];
}

interface ISectionState {
  sections: Section[];
  searchSections: Section[];
  addSection: () => void;
  changeName: (id: string, newName: string) => void;
  deleteSection: (id: string) => void;
  createGoal: (id: string, goal: SectionItem) => void;
  likeGoal: (firstId: string, secondId: string) => void;
  editGoal: (sectionId: string, updatedGoal: SectionItem) => void;
  searchGoal: (text: string) => void;
}

export const useSections = create<ISectionState>()(
  devtools(
    persist(
      (set) => ({
        sections: [],
        searchSections: [],
        addSection: () =>
          set((state: ISectionState) => ({
            sections: [
              ...state.sections,
              {
                id: nanoid(),
                name: "",
                sectionItems: [],
              },
            ],
          })),
        changeName: (id, newName) =>
          set((state: ISectionState) => ({
            sections: state.sections.map((item) =>
              item.id === id ? { ...item, name: newName } : item
            ),
          })),
        deleteSection: (id) =>
          set((state: ISectionState) => ({
            sections: state.sections.filter((item) => item.id !== id),
          })),
        createGoal: (id, goal) =>
          set((state: ISectionState) => ({
            sections: state.sections.map((item) =>
              item.id === id
                ? { ...item, sectionItems: [...item.sectionItems, goal] }
                : item
            ),
          })),
        likeGoal: (firstId, secondId) =>
          set((state: ISectionState) => ({
            sections: state.sections.map((item) =>
              item.id === firstId
                ? {
                    ...item,
                    sectionItems: item.sectionItems.map((goal) =>
                      goal.id === secondId
                        ? { ...goal, is_liked: !goal.is_liked }
                        : goal
                    ),
                  }
                : item
            ),
          })),
        editGoal: (sectionId, updatedGoal) =>
          set((state: ISectionState) => ({
            sections: state.sections.map((section) => {
              if (section.id === sectionId) {
                return {
                  ...section,
                  sectionItems: section.sectionItems.map((item) =>
                    item.id === updatedGoal.id ? updatedGoal : item
                  ),
                };
              } else {
                return section;
              }
            }),
          })),

        searchGoal: (text: string) =>
          set((state: ISectionState) => {
            const lowerText = text.toLowerCase();

            const matchedSections = state.sections.reduce<Section[]>(
              (acc, section) => {
                const matchedItems = section.sectionItems.filter(
                  (item) =>
                    item.text.toLowerCase().includes(lowerText) ||
                    item.title.toLowerCase().includes(lowerText) ||
                    (item.color &&
                      item.color.toLowerCase().includes(lowerText)) ||
                    (item.image && item.image.toLowerCase().includes(lowerText))
                );

                if (matchedItems.length > 0) {
                  acc.push({ ...section, sectionItems: matchedItems });
                }

                return acc;
              },
              []
            );

            return { ...state, searchSections: matchedSections };
          }),
      }),

      {
        name: "section-info",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
