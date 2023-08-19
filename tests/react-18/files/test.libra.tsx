directory('folder 1', () => {
  add('story 1', () => {
    return <div>folder 1 story 1</div>;
  });

  add('story 2', () => {
    return <div>folder 1 story 2</div>;
  });

  add('story 3', () => {
    return <div>folder 1 story 3</div>;
  });

  directory('folder 1 nested', () => {
    add('story 1', () => {
      return <div>folder 1 nested story 1</div>;
    });

    add('story 2', () => {
      return <div>folder 1 nested story 2</div>;
    });
  });
});

add('root story 1', () => {
  return <div>root story 1</div>;
});

add('root story 2', () => {
  return <div>root story 2</div>;
});
