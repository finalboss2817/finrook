import React from 'react';

interface StoryProgressProps {
  activeChapter: number;
  onSelectChapter: (chapterIndex: number) => void;
}

export const StoryProgress: React.FC<StoryProgressProps> = ({
  activeChapter,
  onSelectChapter,
}) => {
  const chapters = [
    { num: '01', title: 'Before the Move', target: '#hero' },
    { num: '02', title: 'The Disconnect', target: '#story' },
    { num: '03', title: 'Four Arenas', target: '#arenas' },
    { num: '04', title: 'Your Move', target: '#pathways' },
    { num: '05', title: 'Methodology', target: '#playbook' },
    { num: '06', title: 'The Standard', target: '#rules' },
    { num: '07', title: 'Inquiry', target: '#inquiry' },
  ];

  return (
    <aside
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-2.5 select-none pointer-events-auto"
      aria-label="Story chapter progression"
    >
      <div className="bg-[#111111]/90 backdrop-blur-md p-3 rounded-lg border border-[#222222] shadow-xl flex flex-col gap-2">
        <div className="text-[10px] uppercase tracking-wider text-[#71717A] px-2 font-mono flex items-center justify-between">
          <span>CHAPTER {String(activeChapter).padStart(2, '0')} / 07</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2B06]" />
        </div>
        <div className="w-full h-px bg-[#222222]" />
        {chapters.map((chap, idx) => {
          const chapterNum = idx + 1;
          const isActive = activeChapter === chapterNum;
          return (
            <button
              key={chap.num}
              type="button"
              onClick={() => onSelectChapter(chapterNum)}
              className={`group flex items-center justify-between gap-3 text-left px-2 py-1 rounded transition-colors cursor-pointer ${
                isActive
                  ? 'text-white font-medium bg-[#1A1A1A]'
                  : 'text-[#71717A] hover:text-[#D4D4D8]'
              }`}
            >
              <span className="text-xs">{chap.title}</span>
              <span
                className={`text-[10px] font-mono ${
                  isActive ? 'text-[#FF2B06] font-bold' : 'text-[#444444]'
                }`}
              >
                {chap.num}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
