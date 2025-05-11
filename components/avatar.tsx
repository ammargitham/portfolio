import AvatarIcon from '@/assets/icons/avatar';

// import avatar from '@/assets/images/avatar.png';

export default function Avatar() {
  return (
    <figure
      // className={`rounded-avatar before:p-avatar before:bg-muted-foreground before:place-self-end-center m-0 grid scale-[0.9] self-center overflow-hidden pt-[5%] transition-transform before:col-start-1 before:col-end-auto before:row-start-1 before:row-end-auto before:rounded-[50%] hover:scale-[1] hover:[&_img]:-translate-y-[10%] hover:[&_img]:scale-[1.3]`}
      className={`rounded-avatar before:p-avatar before:bg-muted-foreground before:place-self-end-center m-0 grid scale-[0.9] self-center overflow-hidden pt-[5%] transition-transform before:col-start-1 before:col-end-auto before:row-start-1 before:row-end-auto before:rounded-[50%] hover:scale-[1] hover:[&_svg]:-translate-y-[10%] hover:[&_svh]:scale-[1.3]`}
    >
      <AvatarIcon
        // src={avatar}
        className={`w-avatar-img rounded-avatar-img place-self-end-center col-start-1 col-end-auto row-start-1 row-end-auto translate-y-0 scale-[1.25] transition-transform`}
        alt="Ammar Githam"
      />
    </figure>
  );
}
