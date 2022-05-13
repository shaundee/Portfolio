const projects = (props, ref) => {
  if (typeof window !== 'undefined') {
    // browser code
    window.scrollTo({
      top: ref?.[0].current.offsetTop,
      behavior: 'smooth',
    })
  }
}

export default projects
