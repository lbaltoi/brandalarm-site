/**
 * Email — anti-bot obfuscated email link.
 * NEVER renders the literal "info@brandalarm.ro" string in source.
 * - @ symbol built via String.fromCharCode(64) at runtime
 * - mailto built only on click event
 * - User and domain stored separately
 *
 * Usage:
 *   <Email />                              → info<at>brandalarm.ro
 *   <Email user="contact" />               → contact<at>brandalarm.ro
 *   <Email>Scrie-ne</Email>                → custom label, click opens mail client
 */
export default function Email({
  user = "info",
  domain = "brandalarm.ro",
  subject,
  children,
  style,
  className,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    const at = String.fromCharCode(64);
    const addr = user + at + domain;
    const subj = subject ? `?subject=${encodeURIComponent(subject)}` : "";
    window.location.href = `mailto:${addr}${subj}`;
  };

  // Default visible label: user + @ (built dynamically) + domain
  // The @ is created at runtime, never as a literal in JSX
  const at = String.fromCharCode(64);
  const visibleLabel = children || (
    <>
      {user}
      <span aria-hidden="false">{at}</span>
      {domain}
    </>
  );

  return (
    <a
      href="#"
      onClick={handleClick}
      style={style}
      className={className}
      rel="nofollow noreferrer"
      data-u={user}
      data-d={domain}
    >
      {visibleLabel}
    </a>
  );
}
