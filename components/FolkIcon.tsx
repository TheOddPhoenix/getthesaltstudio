type Kind = 'cryptid' | 'bat' | 'brain' | 'skull' | 'moth' | 'plant' | 'moon' | 'truck' | 'shield' | 'leaf' | 'heart' | 'bag' | 'search' | 'user';

/** Vector placeholders; replace with the supplied brand and collection artwork. */
export default function FolkIcon({ kind, className = '' }: { kind: string; className?: string }) {
  const shapes: Record<Kind, React.ReactNode> = {
    cryptid: <><circle cx="55" cy="20" r="10" fill="currentColor"/><path d="M45 29Q35 31 30 48L16 66 24 72 43 54 38 75 25 93 40 95 55 76 66 94 81 94 64 67 65 45 76 56 83 48 64 31Z" fill="currentColor"/></>,
    bat: <><path d="M49 49Q24 12 5 34L23 40 19 57 36 54 45 74 50 66 55 74 64 54 81 57 77 40 95 34Q76 12 51 49Z" fill="#8d312a" stroke="currentColor" strokeWidth="2"/><path d="M44 45 42 34 49 40 54 34 56 47 54 64 47 64Z" fill="currentColor"/><circle cx="48" cy="48" r="2" fill="#a91f19"/><circle cx="53" cy="48" r="2" fill="#a91f19"/></>,
    brain: <><path d="M51 22C40 12 31 20 30 27 16 23 11 37 16 45 5 57 18 73 29 73 31 87 47 90 51 79 62 89 74 79 73 73 88 72 96 57 85 46 92 33 79 24 70 28 68 16 56 16 51 22Z" fill="#b86443" stroke="currentColor" strokeWidth="2"/><path d="M51 25V77M31 30Q45 37 31 50T29 68M71 32Q55 38 70 49T74 66M20 46Q38 46 41 59M81 47Q63 49 59 64" fill="none" stroke="#422f24" strokeWidth="3" strokeLinecap="round"/></>,
    skull: <><path d="M23 46C17 7 83 7 77 46L70 65 66 83 35 83 30 65Z" fill="#d1b781"/><path d="M34 81V89M44 81V90M55 81V90M65 81V89" stroke="#d1b781" strokeWidth="5"/><ellipse cx="36" cy="48" rx="11" ry="13" fill="#17150d"/><ellipse cx="63" cy="48" rx="11" ry="13" fill="#17150d"/><path d="M50 58 43 70 56 70Z" fill="#17150d"/></>,
    moth: <><path d="M46 40Q20 6 10 24L31 48 10 75Q29 94 47 61M54 40Q80 6 90 24L69 48 90 75Q71 94 53 61" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M46 40 39 25M54 40 61 25M50 38V78" stroke="#bb5b32" strokeWidth="4"/><circle cx="47" cy="43" r="3" fill="#c4442f"/><circle cx="53" cy="43" r="3" fill="#c4442f"/><path d="M17 25 39 47 19 69M83 25 61 47 81 69" fill="none" stroke="#a75631" strokeWidth="2"/></>,
    plant: <><path d="M50 91V25M50 63 27 49M50 49 72 36" stroke="#788042" strokeWidth="4"/><path d="M49 68C13 72 11 43 25 42 39 42 45 57 49 68M51 54C82 59 91 30 76 28 61 26 55 42 51 54M49 34C30 31 33 8 43 10 53 11 54 23 49 34" fill="#788042"/><path d="M13 78Q48 97 87 78" fill="none" stroke="currentColor" strokeWidth="2"/></>,
    moon: <path d="M77 10A43 43 0 1 0 77 90 36 36 0 1 1 77 10" fill="currentColor"/>,
    truck: <><path d="M8 25H61V70H8ZM61 43H78L91 58V70H61"/><circle cx="27" cy="73" r="10"/><circle cx="76" cy="73" r="10"/></>,
    shield: <><path d="M50 10 83 23V48Q83 73 50 91 17 73 17 48V23Z"/><path d="M32 48 45 61 68 37"/></>,
    leaf: <><path d="M20 83Q4 31 85 15 83 81 20 83Z"/><path d="M12 93 73 29M35 67 35 43M49 52 69 53"/></>,
    heart: <path d="M50 86 16 53C-5 30 23 3 43 24L50 31 57 24C77 3 105 30 84 53Z"/>,
    bag: <><path d="M21 30H80L85 85H15Z"/><path d="M34 33V24A16 16 0 0 1 66 24V33"/></>,
    search: <><circle cx="43" cy="40" r="27"/><path d="M63 61 87 85"/></>,
    user: <><circle cx="50" cy="28" r="17"/><path d="M17 86Q17 53 50 53 83 53 83 86Z"/></>,
  };
  return <svg className={`folk-icon ${className}`} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[kind as Kind] || shapes.moth}</svg>;
}
