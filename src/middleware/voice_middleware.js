async function voice_middlewarec(ctx, next) {
  const data = ctx.voiceData;
  ctx.body = {
    code: 0,
    data,
  };
  await next();
}

module.exports = voice_middlewarec;
